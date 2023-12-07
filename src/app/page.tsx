"use client";
import CountriesList from "@/components/CountriesList";
import {QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <main className="flex min-h-screen flex-col items-center py-6 px-4 sm:p-12">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Countries List</h1>
        <CountriesList />
      </main>
    </QueryClientProvider>
  );
}
