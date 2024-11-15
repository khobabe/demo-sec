import Category from '@/app/models/Category';
import DbConnect from '@/utils/dbConnection'
import React from 'react'

const SideBar = async () => {

    // dbconnection here:
    DbConnect();
    const category = await Category.find({});
    return (
        <>
            <div className="flex flex-col px-3 py-2 gap-3">
                {
                    category.map((cat, i) => (

                        <a key={i} href="#" className="bg-sky-700 text-white px-3 py-2 rounded flex justify-between">
                            <span>{cat.category_title}</span>
                            <span className=''>(45)</span>
                        </a>

                    ))
                }
            </div>
        </>
    )
}

export default SideBar