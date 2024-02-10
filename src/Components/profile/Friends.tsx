/* 
created by Samsul kobir 
data: 10/02/2024

*/

import { friendList } from "@/constants/profileMenu";
import React from "react";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { IoSearchSharp } from "react-icons/io5";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const Friends = () => {
  return (
    <div>
      <div>
        <div className="flex justify-between items-center bg-gray-800 rounded-md p-4">
          <Select>
            <SelectTrigger className="w-[150px] bg-gray-900 text-white text-md p-2">
              <SelectValue placeholder="All Friend" />
            </SelectTrigger>
            <SelectContent className="bg-gray-900 text-white">
              <SelectGroup>
                <SelectItem value="apple">Followers</SelectItem>
                <SelectItem value="banana">Following</SelectItem>
                <SelectItem value="blueberry">Close Friend</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <div className="flex gap-2">
            <Input
              className="text-white"
              type="text"
              placeholder="Search Friends"
            />
            <Button>
              <IoSearchSharp className="text-xl" />
            </Button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        {friendList.map((friend) => (
          <>
            <div
              className="bg-gray-800 flex flex-col justify-center items-center rounded-md p-6"
              key={friend.key}
            >
              <Avatar className="w-20 h-20">
                <AvatarImage src={friend.image} />
              </Avatar>
              <h1 className="text-xl font-bold mt-2 text-gray-200">
                {friend.name}
              </h1>
              <p className="text-sm font-light text-gray-100">
                From {friend.location}
              </p>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Friends;
