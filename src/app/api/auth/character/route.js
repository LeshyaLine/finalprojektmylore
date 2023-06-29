import Character from "@/models/Character";
import connect from "@/utils/db";
import {NextResponse} from "next/server";

//-----------------POST---------------------//

export const POST = async (request) => {
  console.log(request.body);

  const {
    name,
    nation,
    level,
    health,
    attack,
    defense,
    stadium,
    characteristic,
    createdBy,
  } = await request.json();

  await connect();

  const newChar = new Character({
    name,
    nation,
    level,
    health,
    attack,
    defense,
    stadium,
    characteristic,
    createdBy,
  });
  console.log(newChar);

  try {
    const res = await newChar.save();

    return new NextResponse(JSON.stringify(res), {status: 201});
  } catch (error) {
    return new NextResponse("Database Error", {status: 500});
  }
};

//----------------GET----------------------//
export const GET = async (request) => {
  console.log("Hello from GET");
  try {
    await connect();
    const characters = await Character.findAll();
    return new NextResponse(JSON.stringify(characters), {status: 200});
  } catch (error) {
    return new NextResponse("Database Error", {status: 500});
  }
};

//-----------UPDATE-------------------//

//-----------DELETE-------------------//
