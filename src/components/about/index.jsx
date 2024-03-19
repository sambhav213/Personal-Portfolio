import Image from "next/image";
import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            Student at Amity University
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
          I am Sambhav Gupta, a driven 3rd-year student at Amity University, with a diverse skill set spanning MERN Stack development, Data Science, Machine Learning, and Advanced Java. My passion lies in software engineering, where I excel in crafting innovative solutions. Noteworthy achievements include being a grand finalist in the Smart India Hackathon 2023, demonstrating my ability to tackle complex challenges while showcasing the proposed solutions and representing the University at the global platform. Additionally, I had the privilege of exhibiting at India's International Science Festival 2023, underscoring my dedication to pushing the boundaries of technology and science. With my technical expertise and innovative mindset, I am poised to make significant contributions in the technology sector.
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            Computer Science and Engineering <sub className="font-semibold text-base">Bachelor of Technology</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            Data Science and Analytics{" "}
            <sub className="font-semibold text-base">Honours Specialization</sub>
          </p>
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 p-4"}>
          <div>
            <h2 className="text-accent font-semibold text-center text-4xl capitalize">
                Certifications
              </h2>
              <div className="w-full max-w-md mx-auto mt-4">
                <table className="w-full table-auto">
                  <tbody>
                    <tr>
                      <td className="px-4 py-2">The Complete 2023 Web Development Bootcamp</td>
                      <td className="px-4 py-2">By Dr.Angela Yu, Udemy</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Complete 2022 Data Science & Machine Learning Bootcamp</td>
                      <td className="px-4 py-2">By Philipp Muellauer, Udemy</td>
                    </tr>
                    {/* Add more rows as needed */}
                  </tbody>
                </table>
              </div>
            </div>
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 p-4"}>
          <div>
            <h2 className="text-accent font-semibold text-center text-4xl capitalize">
                Education
              </h2>
              <div className="w-full max-w-md mx-auto mt-4">
                <table className="w-full table-auto">
                  <tbody>
                    <tr>
                      <td className="px-4 py-2">Amity University, Noida</td>
                      <td className="px-4 py-2">B.Tech, 2025</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Meerut Public School, Meerut</td>
                      <td className="px-4 py-2">12th, 2021</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Meerut Public School, Meerut</td>
                      <td className="px-4 py-2">10th, 2019</td>
                    </tr>
                    {/* Add more rows as needed */}
                  </tbody>
                </table>
              </div>
            </div>
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <Image
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=py,opencv,sklearn,tensorflow,r,anaconda,vscode,html,css,bootstrap,tailwind,js,jquery,mongodb,express,react,nodejs,npm,babel,vite,postgres,mysql,postman,codepen,nextjs,threejs,eclipse,java,git,github,powershell,linux,ubuntu,arduino,raspberrypi`}
            alt="CodeBucks"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 p-8"}>
          <div>
            <h2 className="text-accent font-semibold text-center text-4xl capitalize">
                Hackathons Participated
              </h2>
              <div className="w-full max-w-md mx-auto mt-4">
                <table className="w-full table-auto">
                  <tbody>
                    <tr>
                      <td className="px-4 py-2">Smart India Hackathon 2023</td>
                      <td className="px-4 py-2">Organised by AICTE, Govt. of India and Ministry of Education</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">CyberCup 3.0</td>
                      <td className="px-4 py-2">Organised by Amity University, Noida</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">UHackathon 4.0 Meta</td>
                      <td className="px-4 py-2">Organised by University of Petroleum and Energy Studies, Dehradun</td>
                    </tr>
                    {/* Add more rows as needed */}
                  </tbody>
                </table>
              </div>
            </div>
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 p-8"}>
          <div>
          <h2 className="text-accent font-semibold text-center text-4xl capitalize">
                Portfolio of Duties
              </h2>
              <div className="w-full max-w-md mx-auto mt-4">
                <table className="w-full table-auto">
                  <tbody>
                    <tr>
                      <td className="px-4 py-2">India's International Science Festival 2023</td>
                      <td className="px-4 py-2">Exhibitor</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">14th International Conference Confluence 2024</td>
                      <td className="px-4 py-2">Contributor</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">The Samaritans Foundation</td>
                      <td className="px-4 py-2">Volunteer</td>
                    </tr>
                    {/* Add more rows as needed */}
                  </tbody>
                </table>
              </div>
          </div>
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
