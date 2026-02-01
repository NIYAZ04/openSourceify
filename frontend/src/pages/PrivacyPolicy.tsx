import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Shield } from "lucide-react";

export default function PrivacyPolicy() {
    return (
        <Layout>
            <div className="section-container py-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-3xl mx-auto"
                >
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 rounded-2xl gradient-primary flex items-center justify-center shadow-glow-teal">
                            <Shield className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <h1 className="text-4xl font-bold">Privacy Policy</h1>
                    </div>

                    <div className="glass-card rounded-2xl p-8 space-y-8 text-muted-foreground leading-relaxed">
                        <section>
                            <h2 className="text-xl font-semibold text-foreground mb-4">Introduction</h2>
                            <p>
                                At OpenSourceify, we take your privacy seriously. This Privacy Policy outlines how we handle your data and ensures transparency in our operations.
                            </p>
                        </section>

                        <section className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                            <h2 className="text-xl font-semibold text-foreground mb-4">Our Commitment</h2>
                            <p className="text-foreground font-medium">
                                We do not share any information to any 3rd party services. Your data remains on our platform and is used solely to enhance your Experience.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-foreground mb-4">Data Collection</h2>
                            <p>
                                We only collect information necessary for the functioning of our platform, such as your profile details and project contributions. We do not track you across other websites.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-foreground mb-4">User Rights</h2>
                            <p>
                                You have the right to access, update, or delete your information at any time through your profile settings.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-foreground mb-4">Contact Us</h2>
                            <p>
                                If you have any questions about our privacy practices, please reach out to us through our contact page.
                            </p>
                        </section>

                        <p className="text-sm border-t border-border/50 pt-8">
                            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </p>
                    </div>
                </motion.div>
            </div>
        </Layout>
    );
}
