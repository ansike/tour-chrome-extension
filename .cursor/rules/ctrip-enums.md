# 携程产品枚举值

## productCategoryId (产品类型)

| productCategoryId | productCategoryName |
|-------------------|---------------------|
| 11                | 出境长途旅游         |
| 26                | 出境短途旅游         |

## productPatternId (产品形态)

| productPatternId | 说明 |
|------------------|------|
| 4                | 常规形态 |

## saleMode (销售模式)

| saleMode | 说明 |
|----------|------|
| P        | 产品销售 |

## maintainType (维护类型)

| maintainType | 说明 |
|--------------|------|
| P            | 产品维护 |
| S            | 供应商维护 |

---

> 注意：合同 (contractId) 需要与 saleMode、productCategoryId、productPatternId 匹配，否则会报错：
> "300034:所选择的合同需要是标准主业务合同，且要与销售模式，产品类型，产品形态相匹配"
