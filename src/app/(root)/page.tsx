"use client"
import { Button } from "@/components/ui/button";
import { Dialog } from "@/components/ui/dialog";
import { Modal } from "@/components/ui/modal";
import { SignedIn } from "@clerk/clerk-react";
import { SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { useStoreModal } from "../../../hooks/use-store-modal";
import { useEffect, useState } from "react";

export default function SetUpPage() {
  const storeModal = useStoreModal();
  // const { isOpen, onOpen } = storeModal;
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
      setIsClient(true);
    }, []);


  useEffect(() => {
    if (!(isOpen)) {
      onOpen();
    }
  }, [isOpen, onOpen]);
  return isClient ? (
    <div suppressHydrationWarning={true} className="p-4">
      <UserButton />{" "}
    </div>
  ) : null;

}
