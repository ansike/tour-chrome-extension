import { getAccountConfFromCtrip } from './getAccountConfFromCtrip';
import { searchProviderContactCardList } from '../CreateCarResource/utils/searchProviderContactCardList';

/** contactCardList 中单个联系人的结构 */
export interface ContactCard {
  contactCardId: number;
  name: string;
  email?: string;
  mobileNo?: string;
  mobileNoFull?: string;
  mobileNoCountryCode?: string;
}

/** 用于 bookingControl 的联系人覆盖字段 */
export interface ContactOverlay {
  vendorBookingContact?: string;
  vendorBookingContactId?: number;
  bookingEmail?: string;
  vendorBookingPhone?: {
    areaCode?: string;
    phone?: string;
    phoneNoFull?: string;
  };
  vendorComplainContact?: string;
  vendorComplainContactId?: number;
  vendorComplainEMail?: string;
  vendorBookingEmergencyContact?: string;
  vendorBookingEmergencyContactId?: number;
  vendorBookingSeneschalContact?: string;
  vendorBookingSeneschalContactId?: number;
  vendorBookingSeneschalPhone?: {
    areaCode?: string;
    phone?: string;
    phoneNoFull?: string;
  };
  vendorBookingSeneschalEmail?: string;
}

function contactCardToOverlay(card: ContactCard, type: 'booking' | 'complaint' | 'emergency' | 'seneschal'): Partial<ContactOverlay> {
  const base = {
    areaCode: card.mobileNoCountryCode ?? '+86',
    phone: card.mobileNo,
    phoneNoFull: card.mobileNoFull,
  };
  switch (type) {
    case 'booking':
      return {
        vendorBookingContact: card.name,
        vendorBookingContactId: card.contactCardId,
        bookingEmail: card.email,
        vendorBookingPhone: base,
      };
    case 'complaint':
      return {
        vendorComplainContact: card.name,
        vendorComplainContactId: card.contactCardId,
        vendorComplainEMail: card.email,
      };
    case 'emergency':
      return {
        vendorBookingEmergencyContact: card.name,
        vendorBookingEmergencyContactId: card.contactCardId,
      };
    case 'seneschal':
      return {
        vendorBookingSeneschalContact: card.name,
        vendorBookingSeneschalContactId: card.contactCardId,
        vendorBookingSeneschalPhone: {
          areaCode: card.mobileNoCountryCode ?? '86',
          phone: card.mobileNo,
          phoneNoFull: card.mobileNoFull,
        },
        vendorBookingSeneschalEmail: card.email,
      };
    default:
      return {};
  }
}

/**
 * 获取联系人覆盖数据
 * - 默认取 contactCardList 第一个账号用于所有四种联系人
 * - 若配置了 contactCardIds，则按配置的 contactCardId 在列表中查找
 */
export async function getContactOverlay(): Promise<ContactOverlay | null> {
  try {
    const [accountConf, apiRes] = await Promise.all([
      getAccountConfFromCtrip(),
      searchProviderContactCardList('', 0),
    ]);
    const contactCardList: ContactCard[] = apiRes?.contactCardList ?? [];
    if (contactCardList.length === 0) return null;

    const contactCardIds = (accountConf as any).contactCardIds as
      | { complaint?: number; booking?: number; emergency?: number; seneschal?: number }
      | undefined;

    const byId = new Map<number, ContactCard>();
    for (const c of contactCardList) {
      byId.set(c.contactCardId, c);
    }
    const defaultCard = contactCardList[0];

    const resolve = (type: 'booking' | 'complaint' | 'emergency' | 'seneschal'): ContactCard => {
      const id = contactCardIds?.[type];
      if (id != null && byId.has(id)) return byId.get(id)!;
      return defaultCard;
    };

    const overlay: ContactOverlay = {
      ...contactCardToOverlay(resolve('booking'), 'booking'),
      ...contactCardToOverlay(resolve('complaint'), 'complaint'),
      ...contactCardToOverlay(resolve('emergency'), 'emergency'),
      ...contactCardToOverlay(resolve('seneschal'), 'seneschal'),
    };
    return overlay;
  } catch (e) {
    console.warn('getContactOverlay failed:', e);
    return null;
  }
}
