import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { experience } from '../data/mockData';

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-background relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 max-w-screen-lg relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-4">
                        Professional Experience
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        My journey from industrial automation to AI workflow development.
                    </p>
                </div>

                <div className="space-y-8">
                    {experience.map((job) => (
                        <Card key={job.id} className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 group">
                            <CardHeader className="pb-2">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                                    <div>
                                        <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                                            {job.role}
                                        </CardTitle>
                                        <div className="text-lg text-muted-foreground font-medium">
                                            {job.company}
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-start md:items-end gap-1">
                                        <Badge variant="outline" className="text-xs font-mono bg-secondary/50 text-secondary-foreground border-border">
                                            {job.period}
                                        </Badge>
                                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                                            {job.location}
                                        </span>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <ul className="list-disc list-outside ml-5 space-y-2 text-muted-foreground">
                                    {job.description.map((item, index) => (
                                        <li key={index} className="leading-relaxed">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
