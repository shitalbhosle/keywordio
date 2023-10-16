import { useState } from "react";
import BasicTable from "./BasicTable";
import DoughnutChartComponent from "./DoughnutChartComponent";

const Dashboard = () => {
  const [select, setIsSelect] = useState("Campaigns");

  const campaignData = {
    Campaigns: [40, 35, 25],
    Clicks: [150, 200, 180],
    Cost: [100, 120, 110],
    Conversion: [20, 25, 22],
    Revenue: [500, 600, 550],
  };

  function handleChange(e) {
    setIsSelect(e.target.value);
  }

  return (
    <div>
      <main className="dashboard1">
        <article className="dashboard-left">
          <BasicTable />
        </article>

        <article className="dashboard-right">
          <table>
            <thead>
              <tr>
                <th colSpanSpan={1}>Ad Insits</th>
                <th>
                  <select onChange={handleChange}>
                    <option>Campaigns</option>
                    <option>Clicks</option>
                    <option>Cost</option>
                    <option>Conversion</option>
                    <option>Revenue</option>
                  </select>
                </th>
              </tr>
            </thead>
            <tbody>
              <td>
                <DoughnutChartComponent data={campaignData[select]} />
              </td>
            </tbody>
          </table>
        </article>
      </main>
    </div>
  );
};

export default Dashboard;
