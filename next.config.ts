import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // StaffEat dejó de existir como producto; lo reemplazó PeopleEat (RR.HH. interno).
      {
        source: "/productos/staffeat",
        destination: "/productos/peopleat",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
