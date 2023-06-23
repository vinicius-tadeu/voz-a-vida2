import React from "react";
import "./Separator.sass";

const Separator: React.FC<{ tamanho: string }> = ({tamanho}) => {
  return <div className="separatorH1" style={{width:tamanho}}></div>;
};

export { Separator };
