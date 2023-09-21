import React from "react";
import TextField from "./components/FormFields/TextField";
import Button from "./components/FormFields/Button";
import { useQuery } from "@tanstack/react-query";
import { api } from "./lib/utils/api";
import { SearchResponse } from "./lib/utils/api/types/search.types";
import * as Separator from "@radix-ui/react-separator";
import CircleLoading from "./components/Loading/CircleLoading";
import * as Accordion from "@radix-ui/react-accordion";
import UserAccordionItem from "./components/UserAccordionItem";
import UsersLoading from "./components/Loading/UsersLoading";

function App() {
  const [username, setUsername] = React.useState("");
  const [searchValue, setSearchValue] = React.useState({ username: "" });

  const search = useQuery({
    queryKey: ["search", searchValue.username],
    queryFn: () =>
      api
        .get<SearchResponse>(
          `/search/users?q=${searchValue.username}&per_page=5`,
        )
        .then((res) => res.data),
    enabled: !!searchValue.username.length,
  });

  const onSubmit: React.FormEventHandler<HTMLElement> | undefined = (e) => {
    e.preventDefault();
    setSearchValue({ username });
  };

  return (
    <main
      onSubmit={onSubmit}
      className="mb-[100px] flex min-h-screen w-full flex-col items-center p-[10px]"
    >
      <form className="mt-[100px] box-border flex w-full flex-col rounded-[4px] bg-white px-[20px] py-[25px] md:w-[700px] md:px-[30px]">
        <div className="flex gap-3">
          <TextField
            className="w-full"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter Username"
            disabled={search.isFetching}
          />
          <Button
            type="submit"
            className="relative overflow-hidden"
            disabled={search.isFetching}
          >
            {search.isFetching && (
              <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-inherit">
                <CircleLoading className="h-[23px] w-[23px] text-slate-500" />
              </div>
            )}
            Search
          </Button>
        </div>
        <p className="ml-2 mt-2 text-xs font-medium text-slate-500">
          {!searchValue.username.length
            ? "No search"
            : `Showing users for "${searchValue.username}"`}
        </p>
      </form>
      <Separator.Root className="my-[20px] h-[1px] w-full bg-slate-400 md:w-[700px]" />
      {search.isFetching && <UsersLoading />}
      {!search.isFetching && !search.data?.items.length && (
        <div className="flex min-h-[200px] w-full items-center justify-center rounded-[4px] bg-white md:w-[700px]">
          <p className="text-sm font-semibold text-slate-500">
            {!searchValue.username.length
              ? "Nothing to look for yet."
              : "Data not found."}
          </p>
        </div>
      )}
      {!search.isFetching && !!search.data?.items && (
        <Accordion.Root
          className="w-full rounded-[6px] bg-white shadow-[0_2px_10px_theme(colors.slate.400)] md:w-[700px]"
          type="single"
          defaultValue="item-1"
          collapsible
        >
          {search.data?.items?.map((item) => (
            <UserAccordionItem
              key={item.id}
              username={item.login}
              value={item.login}
            />
          ))}
        </Accordion.Root>
      )}
    </main>
  );
}

export default App;
