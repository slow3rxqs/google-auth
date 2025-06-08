import "./globals.css";
import { AuthProvider } from "./providers/SessionProvider";

export const metadata = {
  title: "slow3rxq | test project",
  description: "Google auth with next-auth",
};
//slow3rxq tarafından yapıldı daha fazla böyle altyapılar için discord.gg/DRCE9wCn4K sunucumuza gelebilirsiniz.
//slow3rxq tarafından yapıldı daha fazla böyle altyapılar için discord.gg/DRCE9wCn4K sunucumuza gelebilirsiniz.
//slow3rxq tarafından yapıldı daha fazla böyle altyapılar için discord.gg/DRCE9wCn4K sunucumuza gelebilirsiniz.
//slow3rxq tarafından yapıldı daha fazla böyle altyapılar için discord.gg/DRCE9wCn4K sunucumuza gelebilirsiniz.
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}