"use client";

import { motion } from "framer-motion";

import { FaBrain, FaPalette, FaHeart, FaSeedling } from "react-icons/fa";
import { GiMeditation, GiJumpingRope } from "react-icons/gi";
// import Link from "next/link";
// import { useRouter } from "next/navigation";

export default function Programs() {
  // const router = useRouter();

  const programs = [
    {
      name: "Early Explorers",
      age: "1-2 years",
      description:
        "Sensory exploration and basic motor skills development through guided play.",
      color: "from-pink-500 to-purple-500",
      icon: <FaSeedling className="text-5xl text-pink-500" />,
      activities: [
        { name: "Sensory Play", icon: "🎨" },
        { name: "Music & Movement", icon: "🎵" },
        { name: "Story Time", icon: "📚" },
        { name: "Outdoor Play", icon: "🌳" },
        { name: "Nap Time", icon: "😴" },
        { name: "Snack Time", icon: "🍎" },
      ],
      highlights: ["Safe Environment", "Caring Teachers", "Fun Activities"],
      techniques: [
        { name: "Montessori", icon: "🎯" },
        { name: "Play-based", icon: "🎲" },
        { name: "Sensory Play", icon: "🎨" },
        { name: "Guided Discovery", icon: "🔍" },
      ],
    },
    {
      name: "Mindful Cubs",
      age: "2-3 years",
      description:
        "Emotional intelligence and mindfulness activities for balanced development.",
      color: "from-blue-500 to-cyan-500",
      icon: <GiMeditation className="text-5xl text-blue-500" />,
      activities: [
        { name: "Yoga", icon: "🧘‍♀️" },
        { name: "Art Therapy", icon: "🎨" },
        { name: "Nature Walks", icon: "🌿" },
        { name: "Quiet Time", icon: "🧘" },
        { name: "Meditation", icon: "🪷" },
        { name: "Group Activities", icon: "👥" },
      ],
      highlights: ["Emotional Growth", "Mindfulness", "Social Skills"],
      techniques: [
        { name: "Mindfulness", icon: "🧘‍♀️" },
        { name: "Emotional Learning", icon: "❤️" },
        { name: "Nature-based", icon: "🌿" },
        { name: "Group Activities", icon: "👥" },
      ],
    },
    {
      name: "Creative Minds",
      age: "2-4 years",
      description:
        "Art, music, and creative expression to nurture imagination.",
      color: "from-yellow-500 to-orange-500",
      icon: <FaPalette className="text-5xl text-yellow-500" />,
      activities: [
        { name: "Painting", icon: "🎨" },
        { name: "Dance", icon: "💃" },
        { name: "Crafts", icon: "✂️" },
        { name: "Music", icon: "🎵" },
        { name: "Drama", icon: "🎭" },
        { name: "Creative Play", icon: "🎪" },
      ],
      highlights: [
        "Artistic Expression",
        "Creative Freedom",
        "Skill Development",
      ],
      techniques: [
        { name: "Artistic Expression", icon: "🎨" },
        { name: "Creative Freedom", icon: "🎨" },
        { name: "Skill Development", icon: "🏋️‍♂️" },
      ],
    },
    {
      name: "Brain Boosters",
      age: "3-4 years",
      description:
        "Cognitive development through interactive learning and problem-solving.",
      color: "from-green-500 to-emerald-500",
      icon: <FaBrain className="text-5xl text-green-500" />,
      activities: [
        { name: "Numbers", icon: "🔢" },
        { name: "Letters", icon: "📝" },
        { name: "Science", icon: "🔬" },
        { name: "Puzzles", icon: "🧩" },
        { name: "Reading", icon: "📚" },
        { name: "Problem Solving", icon: "🤔" },
      ],
      highlights: ["Academic Excellence", "Critical Thinking", "Learning Fun"],
      techniques: [
        { name: "Academic Excellence", icon: "📚" },
        { name: "Critical Thinking", icon: "🤔" },
        { name: "Learning Fun", icon: "🎉" },
      ],
    },
    {
      name: "Little Athletes",
      age: "2-4 years",
      description:
        "Physical activities and games for healthy body development.",
      color: "from-red-500 to-rose-500",
      icon: <GiJumpingRope className="text-5xl text-red-500" />,
      activities: [
        { name: "Sports", icon: "⚽" },
        { name: "Dance", icon: "💃" },
        { name: "Games", icon: "🎮" },
        { name: "Exercise", icon: "🏃‍♂️" },
        { name: "Yoga", icon: "🧘‍♀️" },
        { name: "Team Sports", icon: "🤾" },
      ],
      highlights: ["Physical Fitness", "Team Spirit", "Motor Skills"],
      techniques: [
        { name: "Physical Fitness", icon: "🏃‍♂️" },
        { name: "Team Spirit", icon: "🤾" },
        { name: "Motor Skills", icon: "🏋️‍♂️" },
      ],
    },
    {
      name: "Social Butterflies",
      age: "2-4 years",
      description:
        "Social skills and emotional development through group activities.",
      color: "from-purple-500 to-indigo-500",
      icon: <FaHeart className="text-5xl text-purple-500" />,
      activities: [
        { name: "Group Play", icon: "👥" },
        { name: "Sharing", icon: "🤝" },
        { name: "Communication", icon: "💭" },
        { name: "Friendship", icon: "❤️" },
        { name: "Team Games", icon: "🎮" },
        { name: "Social Skills", icon: "🗣️" },
      ],
      highlights: [
        "Social Development",
        "Emotional Growth",
        "Friendship Building",
      ],
      techniques: [
        { name: "Social Development", icon: "👥" },
        { name: "Emotional Growth", icon: "🤗" },
        { name: "Friendship Building", icon: "❤️" },
      ],
    },
  ];

  const timeTable = {
    times: [
      "8:00 AM",
      "9:00 AM",
      "10:00 AM",
      "11:00 AM",
      "12:00 PM",
      "1:00 PM",
      "2:00 PM",
      "3:00 PM",
      "4:00 PM",
      "5:00 PM",
      "6:00 PM",
      "7:00 PM",
      "8:00 PM",
    ],
    days: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    activities: {
      regular: [
        "Morning Circle",
        "Breakfast Time",
        "Learning Activities",
        "Outdoor Play",
        "Arts & Crafts",
        "Lunch Time",
        "Nap/Rest Time",
        "Story Time",
        "Snack Time",
        "Free Play",
        "Music & Dance",
        "Evening Circle",
        "Departure",
      ],
      special: {
        Monday: {
          "10:00 AM": "Swimming Class 🏊‍♂️",
          "3:00 PM": "Science Experiments 🔬",
        },
        Wednesday: {
          "10:00 AM": "Yoga Session 🧘‍♀️",
          "3:00 PM": "Music Class 🎵",
        },
        Friday: {
          "10:00 AM": "Sports Day 🏃‍♂️",
          "3:00 PM": "Art Workshop 🎨",
        },
        Saturday: {
          "10:00 AM": "Parent-Child Activities 👨‍👩‍👧‍👦",
          "2:00 PM": "Weekend Projects 🎪",
        },
      },
    },
  };

  const getActivityForTimeSlot = (day: string, time: string) => {
    const specialActivity = timeTable.activities.special[day]?.[time];
    if (specialActivity) {
      return specialActivity;
    }
    const timeIndex = timeTable.times.indexOf(time);
    return timeTable.activities.regular[timeIndex];
  };

  const getCellStyle = (day: string, time: string) => {
    const isSpecialActivity = timeTable.activities.special[day]?.[time];
    const baseStyles =
      "p-3 transition-all duration-300 transform hover:scale-105 cursor-pointer text-sm";

    if (isSpecialActivity) {
      return `${baseStyles} bg-yellow-100 hover:bg-yellow-200 font-semibold`;
    }

    const timeIndex = timeTable.times.indexOf(time);
    const colors = [
      "bg-blue-50 hover:bg-blue-100", // Morning activities
      "bg-green-50 hover:bg-green-100", // Mid-morning
      "bg-orange-50 hover:bg-orange-100", // Lunch time
      "bg-purple-50 hover:bg-purple-100", // Afternoon
      "bg-pink-50 hover:bg-pink-100", // Evening
    ];

    return `${baseStyles} ${colors[Math.floor(timeIndex / 3)]}`;
  };

  const getRandomColor = () => {
    const colors = [
      "bg-pink-100 hover:bg-pink-200",
      "bg-blue-100 hover:bg-blue-200",
      "bg-yellow-100 hover:bg-yellow-200",
      "bg-green-100 hover:bg-green-200",
      "bg-purple-100 hover:bg-purple-200",
      "bg-orange-100 hover:bg-orange-200",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const scrollToDetails = () => {
    const detailsSection = document.getElementById("program-details");
    if (detailsSection) {
      detailsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            Our Learning Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our specialized programs designed to nurture your
            child&apos;s unique potential
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {programs.map((program, index) => (
            <motion.div
              key={program.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              onClick={scrollToDetails}
              className="cursor-pointer"
            >
              <div className="group h-full relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300">
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
                />

                {/* Header Section */}
                <div className="relative p-6 pb-4 border-b border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 rounded-xl bg-gray-50 group-hover:scale-110 transition-transform duration-300">
                        {program.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                          {program.name}
                        </h3>
                        <span className="inline-block mt-1 text-sm font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                          {program.age}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {program.description}
                  </p>
                </div>

                {/* Activities Grid */}
                <div className="p-6 pt-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">
                    Daily Activities
                  </h4>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {program.activities.map((activity, i) => (
                      <div
                        key={i}
                        className="flex items-center space-x-2 p-2 rounded-lg bg-gray-50 group-hover:bg-gray-100 transition-colors duration-300"
                      >
                        <span className="text-lg">{activity.icon}</span>
                        <span className="text-sm text-gray-600">
                          {activity.name}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">
                      Program Highlights
                    </h4>
                    {program.highlights.map((highlight, i) => (
                      <div
                        key={i}
                        className="flex items-center space-x-2 text-gray-600"
                      >
                        <svg
                          className="w-4 h-4 text-green-500 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Remove the Learn More button and add a subtle indicator */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-purple-600 flex items-center gap-2">
                    Learn More
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Daily Schedule */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center mb-10 text-purple-600">
            Sample Daily Schedule
          </h3>
          <div className="overflow-x-auto shadow-xl rounded-xl">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="p-3 bg-purple-600 text-white rounded-tl-xl">
                    Time
                  </th>
                  {timeTable.days.map((day) => (
                    <th key={day} className="p-3 bg-purple-600 text-white">
                      {day}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {timeTable.times.map((time) => (
                  <tr key={time} className="border-b border-gray-100">
                    <td className="p-3 bg-purple-50 font-semibold text-sm">
                      {time}
                    </td>
                    {timeTable.days.map((day) => (
                      <td
                        key={`${day}-${time}`}
                        className={getCellStyle(day, time)}
                      >
                        {getActivityForTimeSlot(day, time)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Legend */}
          <div className="mt-6 flex flex-wrap gap-4 justify-center">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-yellow-100 rounded"></div>
              <span className="text-sm text-gray-600">Special Activities</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-blue-50 rounded"></div>
              <span className="text-sm text-gray-600">Morning Activities</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-50 rounded"></div>
              <span className="text-sm text-gray-600">Mid-Morning</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-orange-50 rounded"></div>
              <span className="text-sm text-gray-600">Lunch Time</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-purple-50 rounded"></div>
              <span className="text-sm text-gray-600">Afternoon</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-pink-50 rounded"></div>
              <span className="text-sm text-gray-600">Evening</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
