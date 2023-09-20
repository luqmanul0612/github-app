import * as Separator from "@radix-ui/react-separator";
import Button from "../../components/FormFields/Button";
import TextField from "../../components/FormFields/TextField";
import React from "react";

const AccessToken = () => {
  const [token, setToken] = React.useState("");

  return (
    <main className="flex min-h-[100vh] w-[100vw] items-center justify-center">
      <div className="flex w-[500px] flex-col rounded-[10px] bg-white p-[40px] shadow-xl">
        <h2 className="text-center text-2xl font-bold text-slate-800">
          Github Access Token
        </h2>
        <p className="text-center text-sm text-slate-600">
          This is required to access the github's api, you can use one of the
          following options.
        </p>
        <Separator.Root className="my-[20px] h-[1px] w-full bg-slate-300" />
        <div className="mt-[20px] flex flex-col gap-[20px]">
          <div className="group relative flex items-center justify-between overflow-hidden rounded-[3px] bg-slate-100 px-[15px] py-[20px] hover:border-blue-200">
            <div className="absolute left-0 top-0 h-full w-0 bg-blue-300 transition-all duration-200 ease-in-out group-hover:w-[3px]" />
            <div className="flex flex-col">
              <p className="text-sm font-bold uppercase text-slate-500">
                Provided Access Token
              </p>
              <p className="text-xs font-semibold text-yellow-500">
                Which may expire
              </p>
            </div>
            <Button>Select</Button>
          </div>
          <div className="group relative flex items-center justify-between overflow-hidden rounded-[3px] bg-slate-100 px-[15px] py-[20px] hover:border-blue-200">
            <div className="absolute left-0 top-0 h-full w-0 bg-blue-300 transition-all duration-200 ease-in-out group-hover:w-[3px]" />
            <div className="flex flex-col gap-1">
              <p className="text-sm font-bold uppercase text-slate-500">
                Your own Access Token
              </p>
              <TextField
                value={token}
                onChange={(e) => setToken(e.target.value)}
                placeholder="Access Token"
              />
            </div>
            <Button disabled={!token.length}>Select</Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AccessToken;
