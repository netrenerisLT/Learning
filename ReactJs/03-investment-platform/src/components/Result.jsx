import { formatter } from "../util/investment";

export default function Result({ calculatedValues, totalInvest }) {
  const result = calculatedValues;

  console.log(result);
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {calculatedValues.map((item) => {
          totalInvest += item.annualInvestment;
          return (
            <tr key={item.year}>
              <td>{item.year}</td>
              <td>{formatter.format(item.valueEndOfYear)}</td>
              <td>{formatter.format(item.interest)}</td>
              <td>{formatter.format(item.valueEndOfYear - totalInvest)}</td>
              <td>{formatter.format(totalInvest)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
