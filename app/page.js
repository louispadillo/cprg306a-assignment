/*
  Author: @Louis Padillo

  - Week 2 Assignment done
    - Extra additions (LP): for loop using .map(), included a dedicated go back button
*/

import Image from "next/image";
import Link from "next/link";

// Accounting for the next weekly assignments up to 10.
const weeks = [2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function Home() {
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>

      {/* I had an idea to "automate" the creation of these links not only for easability but for practice*/}
      <ul>
        {weeks.map((week) => ( // essentially a for loop that creates a link for each week in the weeks array
        <li key={week}>
          <Link href={`/week-${week}`}>
            Go to Week {week}
          </Link>
        </li>
      ))}
      </ul>
    </main>
  );
}
