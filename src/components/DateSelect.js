"use client";

import { Button, Space, DatePicker, Card } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const DateSelect = () => {
  const onChange = () => {};
  return (
    <div className="flex  items-center justify-center mt-20 ">
      <div className="border border-gray-700 p-2 rounded-md">
        <Space direction="horizontal">
          {/* <Button type="ghost">Ghost Button</Button> */}
          <DatePicker onChange={onChange} />
          <DatePicker onChange={onChange} />
          {/* <SearchOutlined style={{ fontSize: 60, color: "green" }} /> */}
          <Card className="h-8 w-20 relative">
            <p className=" btn absolute top-1 font-semibold text-green-600">
              Price
            </p>
          </Card>
          <Button
            type="secondary"
            className=" text-green-600 font-semibold bg-white"
          >
            <span className="btn">Book Now</span>
          </Button>
        </Space>
      </div>
    </div>
  );
};

export default DateSelect;
