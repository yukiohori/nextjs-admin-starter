import { loadEnvConfig } from "@next/env";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (): Promise<void> => {
  loadEnvConfig(process.env.NEXT_PUBLIC_SUPABASE_URL || process.cwd());
  loadEnvConfig(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.cwd());
};
