import React from "react";

export const Tabs = ({ children }: { children: React.ReactNode }) => (
  <div>{children}</div>
);

export const TabsList = ({ children }: { children: React.ReactNode }) => (
  <div className="flex gap-2 mb-4">{children}</div>
);

export const TabsTrigger = ({
  children,
  value,
}: {
  children: React.ReactNode;
  value: string;
}) => <button className="px-3 py-1 rounded bg-gray-100">{children}</button>;

export const TabsContent = ({
  children,
  value,
}: {
  children: React.ReactNode;
  value: string;
}) => <div>{children}</div>;
