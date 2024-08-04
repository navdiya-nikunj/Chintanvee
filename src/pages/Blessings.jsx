import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

const Blessings = ({ data }) => {
  console.log(data);
  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
        Blessings
      </h2>
      <div className="rounded-lg border p-4 max-h-64 overflow-y-scroll">
        {data.map((item, idx) => {
          const last = data.length - 1;
          if (idx > 0) {
            const sep = idx != last;
            return (
              <div key={idx}>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>
                      {item[1].slice(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="font-medium">{item[1]}</p>
                    <p className="text-muted-foreground">{item[3]}</p>
                  </div>
                </div>
                {sep && <Separator className="my-4" />}
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};
export default Blessings;
