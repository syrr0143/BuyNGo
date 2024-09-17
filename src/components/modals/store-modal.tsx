"use client";
import toast from 'react-hot-toast'
import React, { useState } from "react";
import { Modal } from "@/components/ui/modal";
import { useStoreModal } from "@/../hooks/use-store-modal";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from 'axios';

const formschema = z.object({
  name: z.string().min(1),
});

const StoreModal = () => {
  const [loading, setLoading] = useState(false);
  const storeModal = useStoreModal();
  const form = useForm<z.infer<typeof formschema>>({
    resolver: zodResolver(formschema),
    defaultValues: {
      name: "",
    },
  });
  const onSubmit = async (values: z.infer<typeof formschema>) => {
    try {
      toast("I have a border.", {
        style: {
          border: "1px solid black",
          backgroundColor: "green",
          color: "white",
          fontWeight:"bold"
        },
      });
      setLoading(false);
      const response = await axios.post('/api/stores', values);
      console.log('RESPONSE STORE MODAL', response)
      
    } catch (error) {
      console.log('STORE-MODAL ONSUBMIT', error)
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <Modal
        description="Add a new store to manage products"
        isOpen={storeModal.isOpen}
        title="Create store"
        onClose={storeModal.onClose}
      >
        <div>
          <div className="space-y-4 py-2 pb-4">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input
                          disabled={loading}
                          placeholder="E-commerce"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="pt-6 space-x-2 flex items-center justify-end">
                  <Button
                    disabled={loading}
                    variant={"outline"}
                    className="bg-gray-200 hover:rounded-lg"
                    onClick={storeModal.onClose}
                  >
                    Cancel
                  </Button>
                  <Button
                    disabled={loading}
                    className="bg-black text-white hover:bg-white hover:text-black hover:border-black hover:rounded-lg"
                    type="submit"
                  >
                    Continue
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default StoreModal;
