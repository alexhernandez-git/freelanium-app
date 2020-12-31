import { PrimaryButton, SecondaryButton } from "components/ui/Buttons";
import React from "react";

const SearchContacts = () => {
  return (
    <nav
      className="relative h-full overflow-y-auto w-full"
      aria-label="Directory"
    >
      <div className="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500">
        <h3>Your contacts</h3>
      </div>
      <ul className="relative z-0 divide-y divide-gray-200">
        <li className="bg-white">
          <div className="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50">
            <div className="flex-shrink-0">
              <img
                className="h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <div className="flex-1 min-w-0">
              <a href="#" className="focus:outline-none">
                <span className="absolute inset-0" aria-hidden="true"></span>
                <p className="text-sm font-medium text-gray-900">
                  Leslie Abbott
                </p>
                <p className="text-sm text-gray-500 truncate">
                  Co-Founder / CEO
                </p>
              </a>
            </div>
            <div>
              <PrimaryButton>Send message</PrimaryButton>
            </div>
          </div>
        </li>

        <li className="bg-white">
          <div className="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50">
            <div className="flex-shrink-0">
              <img
                className="h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <div className="flex-1 min-w-0">
              <a href="#" className="focus:outline-none">
                <span className="absolute inset-0" aria-hidden="true"></span>
                <p className="text-sm font-medium text-gray-900">
                  Hector Adams
                </p>
                <p className="text-sm text-gray-500 truncate">VP, Marketing</p>
              </a>
            </div>
            <div>
              <PrimaryButton>Send message</PrimaryButton>
            </div>
          </div>
        </li>

        <li className="bg-white">
          <div className="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50">
            <div className="flex-shrink-0">
              <img
                className="h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <div className="flex-1 min-w-0">
              <a href="#" className="focus:outline-none">
                <span className="absolute inset-0" aria-hidden="true"></span>
                <p className="text-sm font-medium text-gray-900">
                  Blake Alexander
                </p>
                <p className="text-sm text-gray-500 truncate">
                  Account Coordinator
                </p>
              </a>
            </div>
            <div>
              <PrimaryButton>Send message</PrimaryButton>
            </div>
          </div>
        </li>

        <li className="bg-white">
          <div className="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50">
            <div className="flex-shrink-0">
              <img
                className="h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <div className="flex-1 min-w-0">
              <a href="#" className="focus:outline-none">
                <span className="absolute inset-0" aria-hidden="true"></span>
                <p className="text-sm font-medium text-gray-900">
                  Fabricio Andrews
                </p>
                <p className="text-sm text-gray-500 truncate">
                  Senior Art Director
                </p>
              </a>
            </div>
            <div>
              <PrimaryButton>Send message</PrimaryButton>
            </div>
          </div>
        </li>
      </ul>

      <div className="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500">
        <h3>Contacts available</h3>
      </div>
      <ul className="relative z-0 divide-y divide-gray-200">
        <li className="bg-white">
          <div className="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50">
            <div className="flex-shrink-0">
              <img
                className="h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1501031170107-cfd33f0cbdcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <div className="flex-1 min-w-0">
              <a href="#" className="focus:outline-none">
                <span className="absolute inset-0" aria-hidden="true"></span>
                <p className="text-sm font-medium text-gray-900">
                  Angela Beaver
                </p>
                <p className="text-sm text-gray-500 truncate">
                  Chief Strategy Officer
                </p>
              </a>
            </div>
            <div>
              <SecondaryButton>Add to contacts</SecondaryButton>
            </div>
          </div>
        </li>

        <li className="bg-white">
          <div className="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50">
            <div className="flex-shrink-0">
              <img
                className="h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1506980595904-70325b7fdd90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <div className="flex-1 min-w-0">
              <a href="#" className="focus:outline-none">
                <span className="absolute inset-0" aria-hidden="true"></span>
                <p className="text-sm font-medium text-gray-900">
                  Yvette Blanchard
                </p>
                <p className="text-sm text-gray-500 truncate">Studio Artist</p>
              </a>
            </div>
            <div>
              <SecondaryButton>Add to contacts</SecondaryButton>
            </div>
          </div>
        </li>

        <li className="bg-white">
          <div className="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50">
            <div className="flex-shrink-0">
              <img
                className="h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1513910367299-bce8d8a0ebf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <div className="flex-1 min-w-0">
              <a href="#" className="focus:outline-none">
                <span className="absolute inset-0" aria-hidden="true"></span>
                <p className="text-sm font-medium text-gray-900">
                  Lawrence Brooks
                </p>
                <p className="text-sm text-gray-500 truncate">
                  Content Specialist
                </p>
              </a>
            </div>
            <div>
              <SecondaryButton>Add to contacts</SecondaryButton>
            </div>
          </div>
        </li>
      </ul>
      <div className="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500">
        <h3>Can't find your contact?</h3>
      </div>
      <ul className="relative z-0 divide-y divide-gray-200">
        <li className="bg-white">
          <div className="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50">
            <div>
              <PrimaryButton>Invite your contact</PrimaryButton>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default SearchContacts;
