import { Form, Input, InputNumber, Select } from "antd";

import { TRANSTORT_TYPE } from "~contents/createProduct/constant";

const options = [
  {
    label: "飞机",
    value: TRANSTORT_TYPE.FLIGHT,
  },
  {
    label: "火车",
    value: TRANSTORT_TYPE.TRAIN,
  },
  {
    label: "专车",
    value: TRANSTORT_TYPE.CAR,
  },
];

type TransmissionProps = {
  name: number;
  form: any;
};

const Transmission = (props: TransmissionProps) => {
  const { name, form } = props;
  const transmission = Form.useWatch(["products", name, "transmission"], form);
  console.log("transmission", transmission);
  return (
    <div style={{ marginLeft: 40 }}>
      <Form.Item
        name={[name, "transmission"]}
        label="交通"
        tooltip="交通类型必选，两个产品间必须有交通"
        style={{ marginBottom: "24px" }}
        required
        rules={[{ required: true, message: "交通类型必选" }]}>
        <Select placeholder="请选择交通类型" options={options} />
      </Form.Item>
      {transmission === TRANSTORT_TYPE.CAR && (
        <Form.Item
          name={[name, "price"]}
          label="用车价格"
          tooltip="用车价格必须填写，价格步长为50，向上取整"
          style={{ marginBottom: "24px" }}
          required
          rules={[{ required: true, message: "用车价格必填" }]}>
          <InputNumber
            min={100}
            step={50}
            formatter={(val) => Math.ceil(val / 50) * 50 + ""}
            placeholder="请输入用车价格"
          />
        </Form.Item>
      )}
    </div>
  );
};

export default Transmission;
