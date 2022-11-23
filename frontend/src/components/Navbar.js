import React from "react";
import { Heading, HStack } from "@chakra-ui/react";
import { CalendarIcon } from "@chakra-ui/icons";
import GoalFormModal from "./GoalFormModal";

const Navbar = () => {
  return (
    <>
      <HStack>
        <Heading>Goals</Heading>
        <CalendarIcon color="blue.500" m={2} />
      </HStack>
      <GoalFormModal />
    </>
  );
};

export default Navbar;
