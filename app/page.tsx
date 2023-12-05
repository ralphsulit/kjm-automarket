// Components
import { Hero, SearchBar, CustomFilter, CarCard, ShowMore } from "@/components";
import { yearsOfProduction, fuels } from "@/constants";

// Utils
import { fetchCars } from "@/utils";

interface SearchParams {
  manufacturer?: string;
  year?: number;
  fuel?: string;
  limit?: number;
  model?: string;
}


export default async function Home({ searchParams }: { searchParams: SearchParams }) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || '',
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || '',
    limit: searchParams.limit || 8,
    model: searchParams.model || '',
  });

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id='discover'>
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car) =>
                <CarCard key={car.id} car={car}/>          
              )}
            </div>

            <ShowMore
              pageNumber={(searchParams.limit || 8) / 8}
              isNext={(searchParams.limit || 8) > allCars.length}
            />
          </section>
        ) : (
            <div className="home__error-container">
              <h2 className="text-black text-xl font-bold">Oops.. no result</h2>
              <p>{allCars?.message}</p>
            </div>
        )}

      </div>
    </main>
  )
}
