import { ArrowDownCircleIcon, BriefcaseIcon, EnvelopeIcon } from "@heroicons/react/16/solid";
import ArticleCard from "../article-card";
import { workIcons } from "@/assets";
import Image from "next/image";

export default function ContentSection() {

    return (
        <div className="content">
            <div className="content__articles">
                <ArticleCard date="2022-04-05" formattedDate="2022-04-05" title="Crafting a design system for a multiplanetary future" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. In vel minima corrupti possimus, recusandae quod iste, modi voluptatum veritatis deleniti eum sint, at beatae nam maiores doloribus unde placeat delectus? Quos eum aspernatur natus qui." />
                <ArticleCard date="2022-04-05" formattedDate="2022-04-05" title="Crafting a design system for a multiplanetary future" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. In vel minima corrupti possimus, recusandae quod iste, modi voluptatum veritatis deleniti eum sint, at beatae nam maiores doloribus unde placeat delectus? Quos eum aspernatur natus qui." />
                <ArticleCard date="2022-04-05" formattedDate="2022-04-05" title="Crafting a design system for a multiplanetary future" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. In vel minima corrupti possimus, recusandae quod iste, modi voluptatum veritatis deleniti eum sint, at beatae nam maiores doloribus unde placeat delectus? Quos eum aspernatur natus qui." />
                <ArticleCard date="2022-04-05" formattedDate="2022-04-05" title="Crafting a design system for a multiplanetary future" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. In vel minima corrupti possimus, recusandae quod iste, modi voluptatum veritatis deleniti eum sint, at beatae nam maiores doloribus unde placeat delectus? Quos eum aspernatur natus qui." />
                <ArticleCard date="2022-04-05" formattedDate="2022-04-05" title="Crafting a design system for a multiplanetary future" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. In vel minima corrupti possimus, recusandae quod iste, modi voluptatum veritatis deleniti eum sint, at beatae nam maiores doloribus unde placeat delectus? Quos eum aspernatur natus qui." />

            </div>
            <div className="content__info">
                <div className="contact__container">
                    <form className="contact-form">
                        <div className="contact-form__header">
                            <EnvelopeIcon className="contact-form__icon" />
                            <h2 className="contact-form__title">Get in Touch</h2>
                        </div>
                        <p className="contact-form__description">
                            Have a question or just want to say hello? Fill out the form below and I&apos;ll get back to you as soon as possible.
                        </p>
                        <fieldset className="contact-form__fieldset">
                            <legend className="contact-form__legend">Contact Information</legend>
                            <div className="contact-form__field">
                                <label htmlFor="name" className="contact-form__label">Name</label>
                                <input
                                    className="contact-form__input"
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="John Doe"
                                    required
                                />
                            </div>
                            <div className="contact-form__field">
                                <label htmlFor="email" className="contact-form__label">Email</label>
                                <input
                                    className="contact-form__input "
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="email@example.com"
                                    required
                                />
                            </div>
                            <div className="contact-form__field">
                                <label htmlFor="message" className="contact-form__label">Message</label>
                                <textarea
                                    className="contact-form__input"
                                    id="message"
                                    name="message"
                                    placeholder="Write your message here..."
                                    rows={4}
                                    required
                                />
                                <p className="text-zinc-500 text-sm mt-1">I&apos;ll do my best to respond within 24 hours.</p>
                            </div>
                        </fieldset>
                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="contact-form__submit"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                    <div className="work">
                        <div className="work__header">
                            <BriefcaseIcon className="work__icon" />
                            <h2 className="work__title">Work</h2>
                        </div>
                        <ol className="mt-6 space-y-4">
                            {
                                workIcons && workIcons.map((icon, index) => (
                                    <li key={icon.alt + index} className="flex gap-4">
                                        <div className="work__logo">
                                            <Image src={icon.src} alt={icon.alt} loading="lazy" className="h-7 w-7" />
                                        </div>
                                        <dl className="work__details">
                                            <dt className="sr-only">Company</dt>
                                            <dd className="w-full flex-none text-sm font-medium text-zinc-900 ">{icon.alt}</dd>
                                            <dt className="sr-only">Role</dt><dd className="text-xs text-zinc-500 ">{icon.position}</dd>
                                            <dt className="sr-only">Date</dt><dd className="ml-auto text-xs text-zinc-400 space-x-1 " aria-label={`${icon.startDate} until ${icon.endDate}`}>
                                                <time dateTime={icon.startDate}>{icon.startDate}</time>
                                                <span aria-hidden="true">—</span> <time dateTime={icon.endDate}>{icon.endDate}</time>
                                            </dd>
                                        </dl>
                                    </li>
                                ))
                            }
                        </ol>
                        <a className="work_download-icon" href="#">Download CV <ArrowDownCircleIcon className="h-6 w-6 text-gray-500" /></a>
                    </div>
                </div>
            </div>

        </div>
    )
}