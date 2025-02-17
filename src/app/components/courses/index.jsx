"use client";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../../firebase.config";
import Image from "next/image";

const Courses = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "courses"));
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
    <section className="w-[100%] mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-6">Курсы</h2>
      <div className="grid grid-cols-1 min-[450px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1 sm:gap-2 md:gap-3 lg:gap-4">
        {posts.length > 0 ? (
          posts.map((post) => {
            return (
              <div
              key={post.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-between cursor-pointer h-full transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg"
            >
              {post.imageUrl && (
                <Image
                priority
                  width={600}
                  height={400}
                  src={post.imageUrl}
                  alt={post.courseName}
                  className="w-full h-48 object-cover"
                />
              )}
              
              <div className="p-4 flex flex-col flex-grow gap-1">
                <h3 className="text-lg font-semibold">{post.courseName}</h3>
                <h1 className="text-lg font-semibold text-blue-600">{post.startTime} - {post.endTime}</h1>
                <p className="text-gray-600 text-sm">{post.teacherName}</p>
                <p className="text-gray-600 text-sm">{post.description}</p>
              </div>
            </div>
            
            );
          })
        ) : (
          <p className="text-center text-[20px] text-gray-500">
            - Курсы пока не открылись
          </p>
        )}
      </div>
    </section>
  );
};

export default Courses;
