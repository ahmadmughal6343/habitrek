import { useState } from "react";

const useShow = () => {
  const [show, setShow] = useState(false);
  return { show, setShow };
};

export default useShow;
