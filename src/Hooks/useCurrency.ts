import { useState } from "react";

export default function useCurrency(initialCode: string) {
  const [amount, setAmount] = useState<number>();
  const [code, setCode] = useState<string>(initialCode);

  return { amount, code };
}