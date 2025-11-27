import BookReader from "@/components/modules/BookReader";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  return <BookReader id={id} />;
};

export default Page;
