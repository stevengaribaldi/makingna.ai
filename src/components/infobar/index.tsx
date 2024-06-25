import React from 'react';
import { Breadcrumb } from '../ui/breadcrumb';
import { Card } from '../ui/card';
import { Headphones, Star, Trash } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

type Props = {};

const InfoBar = (props: Props) => {
  return (
    <div className="flex w-full justify-between items-center py-1 mb-8 ">
      <Breadcrumb></Breadcrumb>
      <div className="flex gap-3 items-center">
        <div>
          <Card className="rounded-xl flex gap-3 py-3 px-4 ">
            <Trash></Trash>
            <h1>sjnskjns</h1>
            <Star></Star>
          </Card>
        </div>
        <Avatar>
          <AvatarFallback className="bg-herred text-white">
            <Headphones />
          </AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src="/images/gojo.jpg" alt="@shadcn" />

          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};
export default InfoBar;
