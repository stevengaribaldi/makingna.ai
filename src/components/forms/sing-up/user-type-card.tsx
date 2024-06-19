'use client';
import { Card, CardContent, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/inputmath';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { UserIcon } from 'lucide-react';
import React from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

type Props = {
  value: string;
  title: string;
  text: string;
  register: UseFormRegister<FieldValues>;
  userType: 'owner' | 'student';
  setUserType: React.Dispatch<React.SetStateAction<'owner' | 'student'>>;
};

const UserTypeCard = ({
  register,
  setUserType,
  text,
  title,
  userType,
  value,
}: Props) => {
  return (
    <Label htmlFor={value}>
      <Card
        className={cn(
          'w-full cursor-pointer  ',
          userType == value ? 'bg-bone' : 'hover:border-gray-300',
        )}
      >
        <CardContent className="flex justify-between p-2">
          <div className="flex items-center gap-3">
            <Card
              className={cn(
                'flex justify-center p-3',
                userType == value && 'border-amber-900 ',
              )}
            >
              <UserIcon
                size={30}
                className={cn(
                  userType == value ? 'text-salmon' : 'text-gray-500',
                )}
              />
            </Card>
            <div className="">
              <CardDescription
                className={cn(
                  userType == value ? ' font-bold text-blood' : 'text-gray-500',
                )}
              >
                {title}
              </CardDescription>
              <CardDescription
                className={cn(
                  userType == value
                    ? 'font-normal text-salmon'
                    : 'text-gray-500',
                )}
              >
                {text}
              </CardDescription>
            </div>
          </div>
          <div className="relative">
            <Input
              {...register('type', {
                onChange: (e) => setUserType(e.target.value),
              })}
              value={value}
              id={value}
              type="radio"
              className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
            />
            <div
              //makes a circle

              //{GOOD IDEA : className={cn(
              //CHANGE THE h-2 for feature that are live or being used
              //   'h-2 w-4 rounded-full border border-gray-400',
              //   userType == value ? 'bg-rose-500' : 'bg-transparent',
              // )}}
              className={cn(
                'h-4 w-4 rounded-full',
                userType == value
                  ? 'border  border-blue-200 bg-[#f87187]'
                  : 'border  border-gray-300 bg-slate-100',
              )}
            ></div>
          </div>
        </CardContent>
      </Card>
    </Label>
  );
};

export default UserTypeCard;
