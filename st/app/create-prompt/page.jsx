"use client"

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';


import Form from '@components/Form';
import { BloomFilter } from 'next/dist/shared/lib/bloom-filter';
import { Router } from 'next/router';

const CreatePrompt = () => {

    const [submitting, setSubmitting] = useState(false);

    const [post, setPost] = useState({
        prompt: '',
        tag: ''
    });

    const createPrompt = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        try {
            const response = await fetch('/api/create-prompt', {
                method: 'POST',
                body: JSON.stringify({ prompt: post.prompt, userId: sessionStorage.user.id, tag: post.tag })
            })

            if (response.ok) {
                Router.push('/');
            }
        }
        catch (error) {
            console.log(error);
        }
        finally {
            setSubmitting(false);
        }



        return (
            <Form
                type="Create"
                post={post}
                setPost={setPost}
                submitting={submitting}
                handleSubmit={CreatePrompt}></Form>

        )
    }

    export default CreatePrompt
