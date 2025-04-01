import {RevealOnScroll} from "../RevealOnScroll";
export const About = () => {
    const frontendSkills = [
        "React",
        "Vue",
        "TypeScript",
        "Angular",
        "Bootstrap",
        "TailwindCSS",
        "HTML",
        "CSS"
    ];
    const backendSkills = [
        "Java 11/15/21",
        "Node.js",
        "Spring",
        "RESTAPIs",
        "Microservices",
        "Python",
        "Hibernate",
        
    ];
    const databaseSkills = [
        "MySQL",
        "PostgreSQL",
        "MangoDB",
        "JDBC",
        "Oracle",
        
    ];
    const cloudSkills = [
        "AWS",
        "Azure",
        
    ];

    return ( <section id="about" 
    className="min-h-screen flex items-center justify-center py-20"
    >
        <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                {" "}
                About Me
            </h2>
            <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                <p className="text-gray-300 mb-6">
                Passionate full-stack developer skilled in Java, Spring Boot, React, and cloud technologies, 
                dedicated to creating scalable and efficient solutions.
                </p>
                <div className="grid grid-ols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                        <div className="flex flex-wrap gap-2">
                            {frontendSkills.map((tech, key) => (
                                <span 
                                key ={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                                    hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4"> Backend And Frameworks</h3>
                        <div className="flex flex-wrap gap-2">
                            {backendSkills.map((tech, key) => (
                                <span 
                                key ={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                                    hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4"> DataBase</h3>
                        <div className="flex flex-wrap gap-2">
                            {databaseSkills.map((tech, key) => (
                                <span 
                                key ={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                                    hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4"> Cloud Technologies</h3>
                        <div className="flex flex-wrap gap-2">
                            {cloudSkills.map((tech, key) => (
                                <span 
                                key ={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                                    hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className=" gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
                            <div className="space-y-4 text-gray-300">
                                <div>
                                    <h4 className="space-y-2"> <strong> Java Full Stack Developer at PNC Financial (2024 - Present) </strong> </h4>
                                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                                        <li>Integrated Agile methodologies into the development lifecycle, enhancing team collaboration and ensuring timely project delivery
                                        with iterative improvements.</li>
                                        <li>Industrialized user-centric web applications using Core Java, Spring Boot, and Microservices, improving scalability by 30% and
                                        reducing system downtime by 20%.</li>
                                        <li>Built responsive front-end interfaces with React.js, Angular.js, HTML, CSS, and JavaScript, increasing user engagement by 25% and
                                        achieving 98% cross-platform compatibility.</li>
                                        <li>Optimized server-side components and business logic using JSP, JSTL, and Spring frameworks, reducing deployment cycles by 35%
                                        and enhancing application reliability by 40%</li>
                                        <li>Deployed scalable and secure applications on AWS services, including VPC, EC2, S3, CloudFront, and ELB, optimizing cloud
                                        infrastructure costs by 20%</li>
                                        <li>Managed MongoDB, ensuring high availability and performance for handling large datasets in dynamic application environments.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="space-y-2"> <strong> Software Engineer at Cognizant (2020 - 2022) </strong> </h4>
                                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                                        <li>Collaborated in Agile teams, adhering to software development life cycle best practices to deliver high-quality software solutions
                                        that align with client requirements and industry standards.</li>
                                        <li>Developed and maintained 12+ scalable applications using Java 11, Spring Framework, Spring Security, JPA, and Node.js, enhancing
                                        back-end functionality and security, leading to a 30% improvement in application performance</li>
                                        <li>Led the development, and maintenance of web applications using Python, Django, and Flask, improving performance by 30% and
                                        delivering high-quality solutions aligned with business goals.</li>
                                        <li>Exploited J2EE technologies, including JavaBeans and JDBC, to build over 10 efficient server-side components, improving web
                                        application performance and reliability for over 50,000 users.</li>
                                        <li>Managed relational databases such as MySQL and SQL Server across multiple projects, improving data integrity and reducing query
                                        processing time by 20% for enhanced system efficiency.</li>
                                        <li>Automated CI/CD pipelines using Jenkins to streamline integration, testing, and deployment, improving software release efficiency
                                            and reducing deployment errors.</li>
                                    </ul>
                                </div>
                            </div>
                    </div>
            </div>
            <div className=" gap-6 mt-8">
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li>
                                <strong> Master's in Computer Science </strong> - University of North Carolina at Charlotte
                                (Jan 2023 - May 2024)
                                </li>
                                <li>
                                    Relevant Coursework: Data Structures & Algorithms, Software System Design Implementation,
                                    Database Systems, Network-Based Application Development, Applied Databases...
                                </li>
                            </ul>
                    </div>
            </div>
            
        </div>
    </RevealOnScroll>
    </section>
    );
}