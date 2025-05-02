import React from 'react'
import LinearChart from './Linechart'
import Piechart from './Pichart'

const Analysisdetails = ({ details }) => {
  if (!details) {
    return <div className="text-white">No details available</div>
  }

  return (
    <div>
      <h1 class="text-3xl text-white font-semibold mb-8">Analysis</h1>

      <div class="bg-[#11192E] rounded-2xl p-6 mb-12 flex flex-col items-center justify-center">
        <p class="text-gray-400">Line Chart Placeholder</p>
        <LinearChart info={Object.entries(details.quarterCommitCount).map(([key, value]) => ({ name: key, commits: value }))} />
        <p class="text-center text-sm mt-4 text-gray-400">Commits Per Quarter</p>
      </div>




      <div className="flex flex-wrap justify-around items-center gap-8">

        <div class="bg-[#11192E] rounded-2xl p-6 w-[450px] h-[500px]">
          <h2 class="text-xl font-medium mb-4 text-white">Language Per Repos</h2>
          <div id="donutChart1" class="h-48 w-48 flex flex-col items-center justify-center">
            <Piechart data={details.langRepoCount} />
          </div>

        </div>


        <div class="bg-[#11192E] rounded-2xl p-6 w-[450px] h-[500px]">
          <h2 class="text-xl font-medium mb-4 text-white">Language Per Commits</h2>
          <div id="donutChart2" class="h-48 w-48 flex flex-col items-center justify-center">
            <Piechart data={details.langCommitCount} />
          </div>

        </div>



        <div class="bg-[#11192E] rounded-2xl p-6 w-[450px] h-[500px]">
          <h2 class="text-xl font-medium text-center text-white">Commits Per Repo (Top 10)</h2>
          <div class="flex flex-col md:flex-row gap-8 items-center justify-center">
            <div id="donutChart3" class="h-64 w-64 flex flex-col items-center justify-center">
              <Piechart data={details.repoCommitCount} />
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Analysisdetails
