import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { initialBlogs, Blog } from "@/data/blogs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  title: z.string().min(5, "Title is required"),
  content: z.string().min(20, "Content must be at least 20 characters"),
});

export default function Blogs() {
  const [blogs, setBlogs] = useState<Blog[]>(initialBlogs);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      title: "",
      content: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const newBlog: Blog = {
      id: Math.random().toString(),
      title: values.title,
      author: values.name,
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      content: values.content,
      image: "/images/hero/hero-4.png", // fallback image
    };
    
    setBlogs([newBlog, ...blogs]);
    form.reset();
    toast({
      title: "Story Published!",
      description: "Thank you for sharing your safari experience.",
    });
  };

  return (
    <main className="min-h-screen pt-32 pb-24 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-center mb-16">
          <h1 className="text-5xl font-serif font-bold mb-6">Safari Stories</h1>
          <p className="text-xl text-muted-foreground">Tales from the wild. Read our explorers' experiences.</p>
        </motion.div>

        <div className="space-y-16 mb-24">
          {blogs.map((blog, i) => (
            <motion.article 
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              <div className={`aspect-[4/3] rounded-2xl overflow-hidden ${i % 2 !== 0 ? 'md:order-2' : ''}`}>
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover"
                  onError={(e) => { e.currentTarget.src = "/images/hero/hero-3.png"; }}
                />
              </div>
              <div className="space-y-4">
                <div className="text-sm font-medium tracking-widest text-primary uppercase">{blog.date} • by {blog.author}</div>
                <h2 className="text-3xl font-serif font-bold">{blog.title}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">{blog.content}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-card border rounded-3xl p-8 md:p-12 shadow-sm"
        >
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-serif font-bold mb-8 text-center">Share Your Safari Story</h2>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Jane Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="jane@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Story Title</FormLabel>
                      <FormControl>
                        <Input placeholder="My adventure in the Mara..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="content"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Story</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Tell us what happened..." className="min-h-[150px]" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" size="lg" className="w-full text-lg h-14">Publish Story</Button>
              </form>
            </Form>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
