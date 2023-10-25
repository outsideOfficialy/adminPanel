import PageLayout from "@/components/PageLayout";
import { InputTypeText } from "@/components/Inputs";

export default function Home() {
  return (
    <PageLayout>
      <InputTypeText placeholder="Name" label="Member Nickname*" name="For" />
    </PageLayout>
  );
}
