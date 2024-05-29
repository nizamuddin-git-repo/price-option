import Price from "../Price/Price";

const PriceOptions = () => {

    const priceOptions = [
        {
          "id": 1,
          "name": "Basic Membership",
          "features": [
            "Access to cardio machines",
            "Limited access to weight machines",
            "Locker usage",
            "Access to basic fitness classes",
            "Discounts on personal training sessions"
          ],
          "price": 30.00,
        },
        {
          "id": 2,
          "name": "Standard",
          "features": [
            "Access to cardio machines and weight machines",
            "Full locker usage",
            "Access to group fitness classes",
            "Access to sauna and steam room",
            "Discounts on premium fitness classes"
          ],
          "price": 50.00,
        },
        {
          "id": 3,
          "name": "Premium Membership",
          "features": [
            "Access to all facilities including sauna and pool",
            "Personal training session per week",
            "Access to premium group fitness classes",
            "Nutritional counseling sessions",
            "Complimentary towels and toiletries"
          ],
          "price": 80.00,
        },
      ];

    return (
        <div className="m-12">
            <h2 className="text-4xl">Best Prices in tha town</h2>
            <div className="grid md:grid-cols-3 gap-6">
            {
               priceOptions.map(option => <Price key={option.id} option={option}></Price>) 
            }
            </div>
        </div>
    );
};

export default PriceOptions;