import { useRequest } from "ahooks";
import { Radio, Select } from "antd";
import { useState } from "react";

import { suggestAirport } from "../scripts/suggestAirport";

const useAirportSelect = () => {
  const [arrivalAirport, setarrivalAirport] = useState();
  const [departureAirport, setDepartureAirport] = useState();
  const [isSameAirport, setIsSameAirport] = useState(true);

  const {
    data,
    loading: airportLoading,
    run,
  } = useRequest(suggestAirport, {
    debounceWait: 500,
    manual: true,
  });

  const dom = (
    <>
      <div style={{ marginBottom: 20 }}>
        <span style={{ fontWeight: "bold", fontSize: 16 }}>机场信息：</span>
      </div>
      <div style={{ marginBottom: 10 }}>
        <span style={{ fontSize: 14 }}>往返机场是否相同：</span>
        <Radio.Group
          size="small"
          onChange={(e) => {
            setIsSameAirport(e.target.value);
            if (e.target.value) {
              setDepartureAirport(arrivalAirport);
            } else {
              setDepartureAirport(undefined);
            }
          }}
          value={isSameAirport}>
          <Radio.Button value={true}>相同</Radio.Button>
          <Radio.Button value={false}>不同</Radio.Button>
        </Radio.Group>
      </div>
      <div style={{ marginBottom: 10 }}>
        <span style={{ fontSize: 14 }}>抵达机场：</span>
        <Select
          size="small"
          placeholder="输入机场名称搜索"
          style={{ width: 200 }}
          loading={airportLoading}
          showSearch
          onChange={(val) => {
            setarrivalAirport(val);
            if (isSameAirport) {
              setDepartureAirport(val);
            }
          }}
          filterOption={false}
          onSearch={run}
          options={data?.airports?.map((item) => ({
            label: item.airportName,
            value: item.airportCode,
          }))}
        />
        {isSameAirport ? null : (
          <>
            <span style={{ fontSize: 14, marginLeft: 20 }}>出发机场：</span>
            <Select
              size="small"
              placeholder="输入机场名称搜索"
              style={{ width: 200 }}
              loading={airportLoading}
              showSearch
              onChange={setDepartureAirport}
              filterOption={false}
              onSearch={run}
              options={data?.airports?.map((item) => ({
                label: item.airportName,
                value: item.airportCode,
              }))}
            />
          </>
        )}
      </div>
    </>
  );
  return {
    dom,
    arrivalAirport,
    departureAirport,
  };
};

export { useAirportSelect };
