import { Form, Input, Radio } from "antd";

const options = [
  {
    label: "相同",
    value: true,
  },
  // {
  //   label: "不同",
  //   value: false,
  // },
];

type HotelProps = {
  name: number;
  form: any;
};

const Hotel = (props: HotelProps) => {
  const { name, form } = props;
  const sameHotel = Form.useWatch(["products", name, "sameHotel"], form);
  return (
    <div style={{ marginLeft: 40 }}>
      <Form.Item
        name={[name, "sameHotel"]}
        label="酒店是否与前一晚相同"
        tooltip="确认行程段酒店是否与前一晚相同"
        style={{ marginBottom: "24px" }}
        required
        rules={[{ required: true, message: "酒店是否与前一晚相同必选" }]}
        initialValue={true}>
        <Radio.Group options={options}></Radio.Group>
      </Form.Item>
      {!sameHotel && (
        <Form.Item
          name={[name, "hotel"]}
          label="酒店ID"
          tooltip="请输入所有酒店ID"
          style={{ marginBottom: "24px" }}
          required
          rules={[{ required: true, message: "酒店ID必填" }]}>
          <Input placeholder="请输入酒店ID，英文逗号分隔" />
        </Form.Item>
      )}
    </div>
  );
};

export default Hotel;
