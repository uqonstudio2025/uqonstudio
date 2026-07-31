"use client";

import FadeIn from "@/components/motion/FadeIn";

import {
  Button,
  Card,
  Input,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Textarea,
} from "@/components/ui";

import { cn } from "@/lib/utils";

import type {
  ContactFormProps,
} from "../Contact.types";

import {
  contactFormStyles,
} from "./ContactForm.styles";

/* ==========================================================================
 * Component
 * ========================================================================== */

const ContactForm = ({
  content,
  className,
}: ContactFormProps) => {
  return (
    <FadeIn
      delay={0.15}
    >
      <div
        className={cn(
          contactFormStyles.wrapper,
          className
        )}
      >
        <Card
          className={
            contactFormStyles.card
          }
        >
          <div
            className={
              contactFormStyles.content
            }
          >
            <form
              className={
                contactFormStyles.form
              }
            >
              <div
                className={
                  contactFormStyles.grid
                }
              >
                {/* Name */}

                <div
                  className={
                    contactFormStyles.field
                  }
                >
                  <Label htmlFor="name">
                    Nama
                  </Label>

                  <Input
                    id="name"
                    placeholder={
                      content.form.placeholders.name
                    }
                  />
                </div>

                {/* Email */}

                <div
                  className={
                    contactFormStyles.field
                  }
                >
                  <Label htmlFor="email">
                    Email
                  </Label>

                  <Input
                    id="email"
                    type="email"
                    placeholder={
                      content.form.placeholders.email
                    }
                  />
                </div>

                {/* Service */}

                <div
                  className={cn(
                    contactFormStyles.field,
                    contactFormStyles.fullWidth
                  )}
                >
                  <Label htmlFor="service">
                    Layanan
                  </Label>

                  <Select>
                    <SelectTrigger
                      id="service"
                    >
                      <SelectValue
                        placeholder={
                          content.form.placeholders.service
                        }
                      />
                    </SelectTrigger>

                    <SelectContent>
                      {content.form.services.map(
                        (
                          service
                        ) => (
                          <SelectItem
                            key={
                              service.value
                            }
                            value={
                              service.value
                            }
                          >
                            {
                              service.label
                            }
                          </SelectItem>
                        )
                      )}
                    </SelectContent>
                  </Select>
                </div>

                {/* Message */}

                <div
                  className={cn(
                    contactFormStyles.field,
                    contactFormStyles.fullWidth
                  )}
                >
                  <Label htmlFor="message">
                    Pesan
                  </Label>

                  <Textarea
                    id="message"
                    rows={6}
                    placeholder={
                      content.form.placeholders.message
                    }
                  />
                </div>
              </div>

              <div
                className={
                  contactFormStyles.footer
                }
              >
                <Button
                  type="submit"
                  className={
                    contactFormStyles.submitButton
                  }
                >
                  {
                    content.form.submitLabel
                  }
                </Button>
              </div>
            </form>
          </div>
        </Card>
      </div>
    </FadeIn>
  );
};

export {
  ContactForm,
};