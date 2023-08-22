"use client";

import {useState} from 'react';
import Image from 'next/image';
import { UseSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';

const PromptCard = ({post, handleTagClick, handleEdit, handleDelete}) => {
    return (
        <div className="prompt_card">
            <div className="flex "></div>
            
        </div>
    )
}

export default PromptCard
