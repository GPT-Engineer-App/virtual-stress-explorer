import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-center">All About Cats</h1>
      
      <div className="max-w-4xl mx-auto">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg" 
          alt="Cute cat" 
          className="mx-auto object-cover w-full h-[400px] rounded-lg mb-8"
        />
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Characteristics of Cats</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6">
              <li>Independent nature</li>
              <li>Excellent hunters</li>
              <li>Flexible and agile bodies</li>
              <li>Sharp retractable claws</li>
              <li>Keen senses, especially hearing and night vision</li>
              <li>Communicate through vocalizations, body language, and scent</li>
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Popular Cat Breeds</CardTitle>
            <CardDescription>A few well-known cat breeds and their traits</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li><strong>Siamese:</strong> Vocal, intelligent, and social</li>
              <li><strong>Maine Coon:</strong> Large, friendly, and good with families</li>
              <li><strong>Persian:</strong> Long-haired, calm, and gentle</li>
              <li><strong>Bengal:</strong> Active, playful, and resembles wild cats</li>
              <li><strong>Scottish Fold:</strong> Known for folded ears and sweet temperament</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
