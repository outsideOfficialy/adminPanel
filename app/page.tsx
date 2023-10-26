import PageLayout from "@/components/PageLayout";
import { InputTypeText, SearchInput } from "@/components/Inputs";

export default function Home() {
  return (
    <PageLayout title="Add music">
      <SearchInput onSearch={() => {}} placeholder="Search" label="Member Fullname" name="For" />
      <InputTypeText placeholder="Name" label="Member Nickname*" name="For" />
    </PageLayout>
  );
}
