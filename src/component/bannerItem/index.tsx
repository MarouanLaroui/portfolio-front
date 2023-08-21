import {ItemContainer,ItemTitle,ItemDescription} from "./style.ts"
import { ReactNode } from "react";


export type BannerItemProps = {
  title:string;
  description:string;
  icon:ReactNode
}
export const BannerItem = ({title,description,icon}:BannerItemProps) => {
  return <ItemContainer >
    {icon}
    <ItemTitle>{title}</ItemTitle>
    <ItemDescription>{description}</ItemDescription>
  </ItemContainer>
}