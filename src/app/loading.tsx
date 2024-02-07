import { Spin } from "antd";

const Loading = () => {
  return (
    <div className="min-h-screen flex justify-center items-center  ">
      <Spin size="large">
        <div className="content" />
      </Spin>
    </div>
  );
};

export default Loading;
