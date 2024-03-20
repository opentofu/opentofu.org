import React from "react";



export default function GetStarted() {
    return (
        <section className="py-12 mx-auto container items-center flex flex-col px-4">
            <h2 className="text-center text-3xl md:text-5xl font-bold mb-4 md:mb-7">
                Which of these best describes you?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white dark:bg-blue-900 p-6">
                    <h3 className="text-xl mb-2">I want a high-level overview</h3>
                    <p className="text-gray-600 dark:text-gray-500">
                        Learn the fundamentals of Infrastructure-as-Code in
                        this high level guide, understand why IaC is so powerful, and how OpenTofu can help.
                    </p>
                </div>
                <div className="bg-white dark:bg-blue-900 p-6">
                    <h3 className="text-xl mb-2">I'm new to OpenTofu</h3>
                    <p className="text-gray-600 dark:text-gray-500">
                        For newcomers to infrastructure as code an OpenTofu, this hands-on guide runs you through the
                        basics of creating your first server with OpenTofu.
                    </p>
                </div>
                <div className="bg-white dark:bg-blue-900 p-6">
                    <h3 className="text-xl mb-2">I'm migrating from Terraform</h3>
                    <p className="text-gray-600 dark:text-gray-500">
                        If you already have experience with Terraform but want to migrate to OpenTofu, this is for you.
                        Tried and tested migration paths from Terraform to OpenTofu.
                    </p>
                </div>
                <div className="bg-white dark:bg-blue-900 p-6">
                    <h3 className="text-xl mb-2">Just give me the docs</h3>
                    <p className="text-gray-600 dark:text-gray-500">
                        Reference manual for those in need of a quick lookup.
                    </p>
                </div>
            </div>
        </section>
    );
}
