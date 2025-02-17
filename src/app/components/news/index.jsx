"use client";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../../firebase.config";
import Image from "next/image";
import { format } from "date-fns";

const News = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "posts"));
        const postsArray = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPosts(postsArray);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <section className="container mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-6">Последние новости</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {posts.length > 0 ? (
          posts.map((post) => {
            const createdAt = post.createdAt?.seconds
              ? new Date(post.createdAt.seconds * 1000)
              : null;

            return (
              <div
              key={post.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-between h-full"
            >
              {post.imageUrl && (
                <Image
                priority
                  width={600}
                  height={400}
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
              )}
              
              <div className="p-4 flex flex-col flex-grow gap-1">
                <h3 className="text-lg font-semibold">{post.title}</h3>
                <p className="text-gray-600 text-sm">{post.description}</p>
                <div className="flex-grow"></div> 
                <div className="flex items-center justify-end">
                <p className="text-gray-600 text-sm">
                  {post.createdAt?.seconds
                    ? format(new Date(post.createdAt.seconds * 1000), "yyyy-MM-dd HH:mm")
                    : "Неизвестная дата"}
                </p>
                </div>
              </div>
            </div>
            
            );
          })
        ) : (
          <p className="text-center text-[20px] text-gray-500">
            - Новостей пока нет...
          </p>
        )}
      </div>
    </section>
  );
};

export default News;
