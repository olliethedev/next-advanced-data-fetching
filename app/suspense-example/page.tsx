import { DataComponent } from "@/components/data-component";
import { LoadingPlaceholder } from "@/components/loading-placeholder";
import { Suspense } from "react";

export default function SuspenseExample() {
    return (
      <main className="flex min-h-screen flex-col items-center gap-4 p-4">
        <h1>Suspense Example</h1>
        <div className="flex bg-gray-400 w-full gap-2 p-2">
            <Suspense key="A" fallback={<LoadingPlaceholder message="Loading Initial Data A..."/>}>
                <DataComponent color="green" name="A" />
            </Suspense>
            <Suspense key="B" fallback={<LoadingPlaceholder message="Loading Initial Data B..."/>}>
                <DataComponent color="blue" name="B" />
            </Suspense>
        </div>
      </main>
    );
  }