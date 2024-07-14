import { sleep } from '~/contents/createProduct/CreateModal/util'

export const saveClauses = async (productId: string) => {
  try {
    for (let tabEnum = 1; tabEnum <= 4; tabEnum++) {
      const productClause = await listProductClauses(productId, tabEnum)
      const clausePackage = await getClausePackage(productClause)
      const clausePackageItemDtos = formatProductClauses(
        clausePackage.clauseTypeDtos
      )
      await saveClausePackage({
        productClause,
        clausePackageItemDtos
      })
      await saveProductClauses(
        productId,
        productClause.centralDataDto.clausePackageId,
        tabEnum
      )
      // 随机休眠 1s - 3s
      await sleep(Math.floor(Math.random() * (3000 - 1000 + 1)) + 1000)
    }
    return 'success'
  } catch (error) {
    return error
  }
}

export const getClausePackage = async (productClause: any) => {
  const body = {
    ...productClause.centralDataDto,
    clauseFilterConditionDto: productClause.centralDataDto.filterConditionDto,
    firstClassClauseTypeIds:
      productClause.centralDataDto.additionalInfoDto.firstClassTypeIds
  }
  delete body.filterConditionDto
  body.additionalInfoDto = {
    ...body.additionalInfoDto,
    isTra: 'F',
    isChildrenToNew: 'T'
  }
  const res = await fetch(
    'https://online.ctrip.com/restapi/soa2/20046/getClausePackage?',
    {
      headers: {
        accept: '*/*',
        'accept-language': 'zh-CN,zh;q=0.9',
        'content-type': 'text/plain;charset=UTF-8',
        cookieorigin: 'https://vbooking.ctrip.com',
        priority: 'u=1, i',
        'sec-ch-ua':
          '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'x-tt-core': '1'
      },
      referrerPolicy: 'no-referrer-when-downgrade',
      body: JSON.stringify(body),
      method: 'POST',
      mode: 'cors',
      credentials: 'include'
    }
  )

  return await res.json()
}

export const listProductClauses = async (
  productId: string,
  tabEnum: number
) => {
  const res = await fetch(
    'https://online.ctrip.com/restapi/soa2/15638/listProductClauses?_fxpcqlniredt=09031059218989378081&_fxpcqlniredt=09031059218989378081',
    {
      headers: {
        accept: '*/*',
        'accept-language': 'zh-CN,zh;q=0.9',
        'content-type': 'application/json',
        cookieorigin: 'https://vbooking.ctrip.com',
        priority: 'u=1, i',
        'sec-ch-ua':
          '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'x-ctx-locale': 'zh-CN',
        'x-tt-core': '1'
      },
      referrer:
        'https://vbooking.ctrip.com/ivbk/vendor/newResourceClause?productid=48464967&istab=1&from=vbk',
      referrerPolicy: 'no-referrer-when-downgrade',
      body: `{\"contentType\":\"json\",\"head\":{\"cid\":\"09031059218989378081\",\"ctok\":\"\",\"cver\":\"1.0\",\"lang\":\"01\",\"sid\":\"8888\",\"syscode\":\"09\",\"auth\":\"\",\"extension\":[]},\"productId\":\"${productId}\",\"tabEnum\":${tabEnum}}`,
      method: 'POST',
      mode: 'cors',
      credentials: 'include'
    }
  )

  return await res.json()
}

export const getPackageList = async (productId: string) => {
  const res = await fetch(
    'https://online.ctrip.com/restapi/soa2/15638/getPackageList?_fxpcqlniredt=09031059218989378081&_fxpcqlniredt=09031059218989378081',
    {
      headers: {
        accept: '*/*',
        'accept-language': 'zh-CN,zh;q=0.9',
        'content-type': 'application/json',
        cookieorigin: 'https://vbooking.ctrip.com',
        priority: 'u=1, i',
        'sec-ch-ua':
          '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'x-ctx-locale': 'zh-CN',
        'x-tt-core': '1'
      },
      referrerPolicy: 'no-referrer-when-downgrade',
      body: `{\"contentType\":\"json\",\"head\":{\"cid\":\"09031059218989378081\",\"ctok\":\"\",\"cver\":\"1.0\",\"lang\":\"01\",\"sid\":\"8888\",\"syscode\":\"09\",\"auth\":\"\",\"extension\":[]},\"productId\":\"${productId}\",\"priceInputType\":1}`,
      method: 'POST',
      mode: 'cors',
      credentials: 'include'
    }
  )

  return await res.json()
}

export const saveClausePackage = async ({
  productClause,
  clausePackageItemDtos
}) => {
  console.log({
    productClause,
    clausePackageItemDtos
  })

  const body = {
    ...productClause.centralDataDto,
    firstClassClauseTypeIds:
      productClause.centralDataDto.additionalInfoDto.firstClassTypeIds,
    clausePackageItemDtos,
    pICategoryId: productClause.centralDataDto.filterConditionDto.pICategoryId
  }

  const res = await fetch(
    'https://online.ctrip.com/restapi/soa2/20046/saveClausePackage',
    {
      headers: {
        accept: '*/*',
        'accept-language': 'zh-CN,zh;q=0.9',
        'content-type': 'text/plain;charset=UTF-8',
        cookieorigin: 'https://vbooking.ctrip.com',
        priority: 'u=1, i',
        'sec-ch-ua':
          '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'x-tt-core': '1'
      },
      referrerPolicy: 'no-referrer-when-downgrade',
      body: JSON.stringify(body),
      method: 'POST',
      mode: 'cors',
      credentials: 'include'
    }
  )

  return await res.json()
}

export const saveProductClauses = async (
  productId: string,
  packageId: string,
  tabEnum: number
) => {
  const res = await fetch(
    'https://online.ctrip.com/restapi/soa2/15638/saveProductClauses.json?_fxpcqlniredt=09031059218989378081&_fxpcqlniredt=09031059218989378081',
    {
      headers: {
        accept: '*/*',
        'accept-language': 'zh-CN,zh;q=0.9',
        'content-type': 'application/json',
        cookieorigin: 'https://vbooking.ctrip.com',
        priority: 'u=1, i',
        'sec-ch-ua':
          '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'x-ctx-locale': 'zh-CN',
        'x-tt-core': '1'
      },
      referrer:
        'https://vbooking.ctrip.com/ivbk/vendor/newResourceClause?productid=48464967&istab=1&from=vbk',
      referrerPolicy: 'no-referrer-when-downgrade',
      body: `{\"contentType\":\"json\",\"head\":{\"cid\":\"09031059218989378081\",\"ctok\":\"\",\"cver\":\"1.0\",\"lang\":\"01\",\"sid\":\"8888\",\"syscode\":\"09\",\"auth\":\"\",\"extension\":[]},\"packageId\":${packageId},\"saveType\":3,\"productId\":\"${productId}\",\"tabEnum\":${tabEnum},\"clauseEditDtos\":[],\"unBookingRuleDtos\":[]}`,
      method: 'POST',
      mode: 'cors',
      credentials: 'include'
    }
  )

  return await res.json()
}

function formatProductClauses (clause) {
  return (
    clause
      // .filter(clause => clause.clauseTypeName !== '餐食')
      .reduce((prev, it) => {
        const d1 = it.clauseItemDtos
          .filter(item => item.selected === 'T')
          .map(item => {
            return {
              clauseItemId: item.clauseItemId,
              secondClassTypeId: it.clauseTypeId,
              elementDtos: item.clauseComponentDtos.map(dto => {
                const res = {
                  componentCode: dto.componentCode,
                  value: dto.value
                }

                if (dto.componentElementDtos) {
                  const ele = dto.componentElementDtos.find(
                    dto2 => dto2.elementCode === dto.value
                  )
                  res.value = ele.elementValue
                  res.elementCode = ele.elementCode
                }

                return res
              })
            }
          })
        const d2 = []
        it.containers
          .filter(i => i.selected === 'T')
          .forEach(container => {
            container.clauseItemDtos
              .filter(item => item.selected === 'T')
              .forEach(item => {
                d2.push({
                  clauseItemId: item.clauseItemId,
                  secondClassTypeId: it.clauseTypeId,
                  elementDtos: item.clauseComponentDtos.map(dto => {
                    const res = {
                      componentCode: dto.componentCode,
                      value: dto.value
                    }

                    if (dto.componentElementDtos) {
                      const ele = dto.componentElementDtos.find(
                        dto2 => dto2.elementCode === dto.value
                      )
                      res.value = ele.elementValue
                      res.elementCode = ele.elementCode
                    }

                    return res
                  })
                })
              })
          })
        prev.push(...d1)
        prev.push(...d2)
        return prev
      }, [])
  )
}

// formatProductClauses(data)
