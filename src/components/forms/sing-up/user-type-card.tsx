'use client';
import { Card, CardContent, CardDescription } from '@/components/ui/card';
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
          'w-full cursor-pointer',
          userType == value && 'border-brownish',
        )}
      >
        <CardContent className="flex justify-between p-2">
          <div className="flex items-center gap-3">
            <Card
              className={cn(
                'flex justify-center p-3',
                userType == value && 'border-redishbrown',
              )}
            >
              <UserIcon
                size={30}
                className={cn(
                  userType == value ? 'text-salmon' : 'text-midnight',
                )}
              />
            </Card>
            <div className="">
              <CardDescription
                className={cn(
                  userType == value ? 'text-sienna font-bold' : 'text-midnight',
                )}
              >
                {title}
              </CardDescription>
              <CardDescription
                className={cn(
                  userType == value ? 'text-chocolate font-light' : 'text-midnight',
                )}
              >
                {text}
              </CardDescription>
            </div>
          </div>
        </CardContent>
      </Card>
    </Label>
  );
};

export default UserTypeCard;
